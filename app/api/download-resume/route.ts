import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const baseUrl = searchParams.get("baseUrl") || ""
    
    // Fetch both resume images
    const image1Url = `${baseUrl}/images/resume-page-1.jpg`
    const image2Url = `${baseUrl}/images/resume-page-2.jpg`

    const [image1Response, image2Response] = await Promise.all([
      fetch(image1Url),
      fetch(image2Url),
    ])

    if (!image1Response.ok || !image2Response.ok) {
      throw new Error("Failed to fetch images")
    }

    const [image1Buffer, image2Buffer] = await Promise.all([
      image1Response.arrayBuffer(),
      image2Response.arrayBuffer(),
    ])

    // Dynamic import for pdf-lib
    const { PDFDocument } = await import("pdf-lib")

    // Create a new PDF document
    const pdfDoc = await PDFDocument.create()

    // Embed both images
    const jpgImage1 = await pdfDoc.embedJpg(new Uint8Array(image1Buffer))
    const jpgImage2 = await pdfDoc.embedJpg(new Uint8Array(image2Buffer))

    // A4 size in points (595 x 842)
    const pageWidth = 595
    const pageHeight = 842

    // Add first page with first image
    const page1 = pdfDoc.addPage([pageWidth, pageHeight])
    const scale1 = Math.min(pageWidth / jpgImage1.width, pageHeight / jpgImage1.height)
    const scaledWidth1 = jpgImage1.width * scale1
    const scaledHeight1 = jpgImage1.height * scale1
    page1.drawImage(jpgImage1, {
      x: (pageWidth - scaledWidth1) / 2,
      y: (pageHeight - scaledHeight1) / 2,
      width: scaledWidth1,
      height: scaledHeight1,
    })

    // Add second page with second image
    const page2 = pdfDoc.addPage([pageWidth, pageHeight])
    const scale2 = Math.min(pageWidth / jpgImage2.width, pageHeight / jpgImage2.height)
    const scaledWidth2 = jpgImage2.width * scale2
    const scaledHeight2 = jpgImage2.height * scale2
    page2.drawImage(jpgImage2, {
      x: (pageWidth - scaledWidth2) / 2,
      y: (pageHeight - scaledHeight2) / 2,
      width: scaledWidth2,
      height: scaledHeight2,
    })

    // Serialize the PDF to bytes
    const pdfBytes = await pdfDoc.save()

    // Return the PDF as a download
    return new NextResponse(pdfBytes, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=Anurag_Rawat_Resume.pdf",
        "Cache-Control": "no-cache",
      },
    })
  } catch (error) {
    console.error("[v0] Error generating PDF:", error)
    return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 })
  }
}
