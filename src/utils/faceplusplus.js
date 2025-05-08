import axios from "axios";

// ✅ Claves de la API Face++
const API_KEY = "HrFDlkowpwDQy9hJbyDo0sxk05UbU8Tl";
const API_SECRET = "gpRR83z81Tnin6LubYpjssI-g5t4tEdI";

// ✅ URL de los endpoints
const DETECT_URL = "https://api-us.faceplusplus.com/facepp/v3/detect";
const COMPARE_URL = "https://api-us.faceplusplus.com/facepp/v3/compare";

/**
 * ✅ detectFace
 * Envía una imagen en base64 a Face++ para detectar el rostro y obtener el face_token.
 * 
 * @param {string} base64Image - Imagen en base64 (sin encabezado `data:image/jpeg;base64,`)
 * @returns {string|null} face_token si se detecta, null si no
 */
export const detectFace = async (base64Image) => {
  try {
    const response = await axios.post(DETECT_URL, null, {
      params: {
        api_key: API_KEY,
        api_secret: API_SECRET,
        image_base64: base64Image,
        return_attributes: "none"
      }
    });

    const faces = response.data.faces;

    // Validamos que haya al menos un rostro detectado
    if (faces && faces.length > 0) {
      return faces[0].face_token; // Retornamos el primer rostro detectado
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
 * Compara un face_token ya registrado con una imagen base64 actual usando Face++.
 *
 * @param {string} storedFaceToken - face_token almacenado en la base de datos
 * @param {string} base64Image - Imagen actual capturada en base64
 * @returns {number|null} Nivel de confianza (confidence) si se compara correctamente, null si no
 */
export const compareFaces = async (storedFaceToken, base64Image) => {
  try {
    const response = await axios.post(COMPARE_URL, null, {
      params: {
        api_key: API_KEY,
        api_secret: API_SECRET,
        face_token1: storedFaceToken,
        image_base64_2: base64Image
      }
    });

    // Retornamos el porcentaje de confianza (0 - 100)
    return response.data.confidence;

  } catch (error) {
    console.error("Error en compareFaces:", error.response?.data || error.message);
    return null;
  }
};
