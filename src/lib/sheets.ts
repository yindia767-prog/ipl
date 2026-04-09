export async function getUpiFromSheet() {
  // Replace this with your Google Sheet CSV Export URL
  // To get this URL: 
  // 1. Open your Google Sheet
  // 2. File -> Share -> Publish to web
  // 3. Select 'Entire Document' and 'Comma-separated values (.csv)'
  // 4. Copy the generated link
  const SHEET_CSV_URL = process.env.NEXT_PUBLIC_CONFIG_SHEET_URL || "";
  
  // Debug log (Server side only)
  console.log("📡 Fetching UPI Config from:", SHEET_CSV_URL ? "URL provided" : "EMPTY URL");

  if (!SHEET_CSV_URL) {
    return "paytm.s1yjhpw@pty"; // Default fallback
  }

  try {
    const response = await fetch(SHEET_CSV_URL, { 
      cache: 'no-store', // Disable cache for debugging
      headers: {
        'pragma': 'no-cache',
        'cache-control': 'no-cache'
      }
    });

    if (!response.ok) {
      console.error(`❌ Sheet Fetch Error: ${response.status} ${response.statusText}`);
      return "paytm.s1yjhpw@pty";
    }

    const csvData = await response.text();
    console.log("📄 Raw Sheet Data (first 50 chars):", csvData.substring(0, 50).replace(/\n/g, '[LF]'));
    
    // Split lines and get the very first cell
    const lines = csvData.split('\r\n').join('\n').split('\n');
    if (lines.length > 0) {
      const firstRow = lines[0].split(',');
      const rawId = firstRow[0].replace(/"/g, '').trim(); 
      // Remove any hidden BOM characters that Google Sheets might add
      const upiId = rawId.replace(/[^\x20-\x7E]/g, '');
      
      console.log("🔗 Parsed UPI ID:", upiId);

      if (upiId && upiId.includes('@')) {
        return upiId;
      }
    }
  } catch (error) {
    console.error("❌ Failed to fetch UPI from Google Sheets:", error);
  }

  return "paytm.s1yjhpw@pty";
}
