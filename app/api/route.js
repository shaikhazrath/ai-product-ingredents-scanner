
export async function POST(request) {
  try {
    const formData = await request.formData();
    const imageFile = formData.get('image');
    const imageBuffer = await imageFile.arrayBuffer();
    const imageBase64 = Buffer.from(imageBuffer).toString('base64');

    const api_key = process.env.NEXT_PUBLIC_GEMINI_API;
    const googleAI = new GoogleGenerativeAI(api_key);
    const geminiConfig = {
      temperature: 0.4,
      topP: 1,
      topK: 32,
      maxOutputTokens: 4096,
    };

    const geminiModel = googleAI.getGenerativeModel({
      model: 'gemini-pro-vision',
      geminiConfig,
    });

    const promptConfig = [
      { text: ` this is moisture List all the bad ingredients in them accoring to European Medicines Agency (EMA) and European Commission (EC) ingredients that are restricted or prohibited for use in cosmetic products dont give any discription any thing related them just give me ingredents in bad in them according  European Medicines Agency (EMA) and European Commission (EC) seprated by ,`},
      {
        inlineData: {
          mimeType: 'image/jpeg',
          data: imageBase64,
        },
      },
    ];

    const result = await geminiModel.generateContent({
      contents: [{ role: 'user', parts: promptConfig }],
    });

    const response = result.response;
    return new Response(response.text(), {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  } catch (error) {
    console.error('Error processing the image', error);
    return new Response('Error processing the image', {
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};