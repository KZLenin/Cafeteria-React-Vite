const API_KEY = "HrFDlkowpwDQy9hJbyDo0sxk05UbU8Tl";
const API_SECRET = "gpRR83z81Tnin6LubYpjssI-g5t4tEdI";
const DETECT_URL = "https://api-us.faceplusplus.com/facepp/v3/detect";
const COMPARE_URL = "https://api-us.faceplusplus.com/facepp/v3/compare";

// Detectar rostro y obtener face_token
export async function detectFace(base64Image) {
  const formData = new FormData();
  formData.append("api_key", API_KEY);
  formData.append("api_secret", API_SECRET);
  formData.append("image_base64", base64Image);
  formData.append("return_landmark", 0);

  const response = await fetch(DETECT_URL, {
    method: "POST",
    body: formData,
  });

  const data = await response.json();
  if (data.faces && data.faces.length > 0) {
    return data.faces[0].face_token;
  } else {
    throw new Error("No se detectó rostro.");
  }
}

// Comparar dos face_token
export async function compareFaces(faceToken1, base64Image) {
  const formData = new FormData();
  formData.append("api_key", API_KEY);
  formData.append("api_secret", API_SECRET);
  formData.append("face_token1", faceToken1);
  formData.append("image_base64", base64Image);

  const response = await fetch(COMPARE_URL, {
    method: "POST",
    body: formData,
  });

  const data = await response.json();
  return data.confidence; // valor entre 0 - 100
}
