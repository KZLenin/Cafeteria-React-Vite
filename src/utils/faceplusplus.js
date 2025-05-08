import axios from "axios";

// ✅ Claves de la API Face++
const API_KEY = "HrFDlkowpwDQy9hJbyDo0sxk05UbU8Tl";
const API_SECRET = "gpRR83z81Tnin6LubYpjssI-g5t4tEdI";

// ✅ URL de los endpoints
const DETECT_URL = "https://api-us.faceplusplus.com/facepp/v3/detect";
const COMPARE_URL = "https://api-us.faceplusplus.com/facepp/v3/compare";

/**
 * ✅ detectFace
 */
export const detectFace = async (base64Image) => {
  try {
    const formData = new FormData();
    formData.append("api_key", API_KEY);
    formData.append("api_secret", API_SECRET);
    formData.append("image_base64", base64Image);

    const response = await axios.post(DETECT_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });

    const faces = response.data.faces;

    if (faces && faces.length > 0) {
      return faces[0].face_token;
    } else {
      console.warn("No se detectó ningún rostro.");
      return null;
    }
  } catch (error) {
    console.error("Error en detectFace:", error.response?.data || error.message);
    return null;
  }
};

/**
 * ✅ compareFaces
 */
export const compareFaces = async (storedFaceToken, base64Image) => {
  try {
    const formData = new FormData();
    formData.append("api_key", API_KEY);
    formData.append("api_secret", API_SECRET);
    formData.append("face_token1", storedFaceToken);
    formData.append("image_base64_2", base64Image);

    const response = await axios.post(COMPARE_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });

    return response.data.confidence;
  } catch (error) {
    console.error("Error en compareFaces:", error.response?.data || error.message);
    return null;
  }
};
