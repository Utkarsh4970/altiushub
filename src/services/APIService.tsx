import axios, { AxiosError, AxiosResponse } from 'axios';
import { acquireAccessToken } from '../store/features/GlobalVariables';
import { AllImagesFromProjectResponse, AllPatchesOfImage, AllProjectsResponse, GetModelsResponse, ImagePredictionResponse, SingleImageResponse, SingleProjectDetail } from '../interfaces/api_response';

export const uploadImageAPI = async (images: File[], project_id: string) => {
    const url = `${process.env.REACT_APP_BASE_URL}images?project_id=${project_id}`;
    const token = await acquireAccessToken();
    const data = new FormData();
    images.forEach((image) => {
        data.append('images', image);
    })
    try {
        const op = await axios.post(url, data, {
            headers: {
                accept: 'application/json',
                Authorization: token
            },
        })
        return op.data;
    } catch (err) {
        if (err instanceof AxiosError) {
            const error = err.response?.data;
            throw error;
        }
    }
}

export const uploadImageWithProjectDetail = async (images: File[], project_name: String, project_description: String, model_name: String) => {
    const url = `${process.env.REACT_APP_BASE_URL}project?project_name=${project_name}&project_description=${project_description}&model_name=${model_name}`
    const data = new FormData();
    const token = await acquireAccessToken();
    images.forEach((image) => {
        data.append('images', image);
    })
    try {
        const op = await axios.post(url, data, {
            headers: {
                accept: 'application/json',
                Authorization: token
            }
        })
        return op.data
    } catch (err) {
        if (err instanceof AxiosError) {
            const error = err.response?.data
            throw error
        }
    }
}

export const getSingleImage = async (image: string, project_id: string): Promise<SingleImageResponse> => {
    const url = `${process.env.REACT_APP_BASE_URL}image?project_id=${project_id}&filename=${image}`;
    const token = await acquireAccessToken();
    try {
        const op: AxiosResponse<SingleImageResponse> = await axios.get(url, {
            headers: {
                accept: 'application/json',
                Authorization: token
            }
        })
        return op.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            const response = axiosError.response;
            if (response) {
                throw response.data;
            } else {
                throw new Error('Network Error'); // Throw a generic error message for network errors
            }
        } else {
            throw error; // Re-throw other types of errors
        }
    }
}

export const deleteImage = async (project_id: string, image_name_list: string[]) => {
    const url = `${process.env.REACT_APP_BASE_URL}images?project_id=${project_id}`;
    const token = await acquireAccessToken();
    try {
        const op = await axios.delete(url, {
            headers: {
                accept: 'application/json',
                Authorization: token
            },
            data: image_name_list
        })
        return op.data
    } catch (err) {
        if (err instanceof AxiosError) {
            const error = err.response?.data
            throw error
        }
    }
}

export const getAllImagesOfProject = async (project_id: string): Promise<AllImagesFromProjectResponse> => {
    const url = `${process.env.REACT_APP_BASE_URL}images?project_id=${project_id}`;
    const token = await acquireAccessToken();
    try {
        const op: AxiosResponse<AllImagesFromProjectResponse> = await axios.get(url, {
            headers: {
                accept: 'application/json',
                Authorization: token
            }
        })
        return op.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            const response = axiosError.response;
            if (response) {
                throw response.data; // Throw the error response data
            } else {
                throw new Error('Network Error'); // Throw a generic error message for network errors
            }
        } else {
            throw error; // Re-throw other types of errors
        }
    }
}

export const getAllPatchesOfPredictedImage = async (project_id: string, image_name: string): Promise<AllPatchesOfImage> => {
    const url = `${process.env.REACT_APP_BASE_URL}images?project_id=${project_id}&filename=${image_name}`;
    const token = await acquireAccessToken();
    try {
        const op: AxiosResponse<AllPatchesOfImage> = await axios.get(url, {
            headers: {
                accept: 'application/json',
                Authorization: token
            }
        })
        return op.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            const response = axiosError.response;
            if (response) {
                throw response.data;
            } else {
                throw new Error('Network Error');
            }
        } else {
            throw error;
        }
    }
}

export const imagePrediction = async (image_name: string, project_id: string, model_prediction: boolean = true, shift_size: number[] = [224, 224], annotation: (number | null)[] = [0, 0, null, null]): Promise<ImagePredictionResponse> => {
    const url = `${process.env.REACT_APP_BASE_URL}image-patches?project_id=${project_id}&filename=${image_name}&model_prediction=${model_prediction}`;
    const token = await acquireAccessToken();
    const payload = {
        "annotation": [...annotation],
        "prediction_settings": {
            "shift": shift_size[0],
            "size": shift_size[1]
        }
    }
    try {
        const op: AxiosResponse<ImagePredictionResponse> = await axios.post(url, payload, {
            headers: {
                accept: 'application/json',
                Authorization: token
            }
        })
        return op.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            const response = axiosError.response;
            if (response) {
                throw response.data;
            } else {
                throw new Error('Network Error');
            }
        } else {
            throw error;
        }
    }
}

export const getAllProjects = async (): Promise<AllProjectsResponse> => {
    const url = `${process.env.REACT_APP_BASE_URL}projects`;
    const token = await acquireAccessToken();
    try {
        const op: AxiosResponse<AllProjectsResponse> = await axios.get(url, {
            responseType: 'json',
            headers: {
                Authorization: token
            }
        })
        return await op.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            const response = axiosError.response;
            if (response) {
                throw response.data; // Throw the error response data
            } else {
                throw new Error('Network Error'); // Throw a generic error message for network errors
            }
        } else {
            throw error; // Re-throw other types of errors
        }
    }
}

export const deleteSingleProject = async (project_id: string) => {
    const url = `${process.env.REACT_APP_BASE_URL}project?project_id=${project_id}`;
    const token = await acquireAccessToken();
    try {
        const op = await axios.delete(url, {
            responseType: 'json',
            headers: {
                Authorization: token
            }
        })
        return await op.data;
    } catch (err) {
        if (err instanceof AxiosError) {
            const error = err.response?.data;
            throw error;
        }
    }
}

export const authorize = async () => {
    const url = `${process.env.REACT_APP_BASE_URL}authorize`;
    const token = await acquireAccessToken();
    try {
        const op = await axios.get(url, {
            headers: {
                accept: 'application/json',
                Authorization: token
            },
        })
        return op.data;
    } catch (err) {
        if (err instanceof AxiosError) {
            const error = err.response?.data;
            throw error;
        }
    }
}

export const getModels = async (): Promise<GetModelsResponse> => {
    const url = `${process.env.REACT_APP_BASE_URL}models`;
    const token = await acquireAccessToken();
    try {
        const op: AxiosResponse<GetModelsResponse> = await axios.get(url, {
            headers: {
                accept: 'application/json',
                Authorization: token
            },
        })
        return op.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            const response = axiosError.response;
            if (response) {
                throw response.data; // Throw the error response data
            } else {
                throw new Error('Network Error'); // Throw a generic error message for network errors
            }
        } else {
            throw error; // Re-throw other types of errors
        }
    }
}

export const updatedUserPrediction = async (project_id: string, file_list: any[]) => {
    const url = `${process.env.REACT_APP_BASE_URL}user-prediction?project_id=${project_id}`
    const token = await acquireAccessToken();
    try {
        const op = await axios.put(url, file_list, {
            headers: {
                accept: 'application/json',
                Authorization: token
            },
        })
        return op.data
    } catch (err) {
        if (err instanceof AxiosError) {
            const error = err.response?.data;
            throw error;
        }
    }
}

export const downloadImages = async (project_id: string, image_name?: string, predicted_filter?: string): Promise<Blob> => {
    let url = `${process.env.REACT_APP_BASE_URL}image-dataset?project_id=${project_id}`
    if (image_name) url += `&filename=${image_name}`
    if (predicted_filter) url += `&prediction_filter=${predicted_filter}`
    const token = await acquireAccessToken();
    try {
        const op: AxiosResponse<Blob> = await axios.get(url, {
            headers: {
                accept: 'application/zip',
                Authorization: token,
            },
            responseType: 'blob',
        })
        return op.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            const response = axiosError.response;
            if (response) {
                throw response.data; // Throw the error response data
            } else {
                throw new Error('Network Error'); // Throw a generic error message for network errors
            }
        } else {
            throw error; // Re-throw other types of errors
        }
    }
}

export const getProjectDetails = async (project_id: string): Promise<SingleProjectDetail> => {
    const url = `${process.env.REACT_APP_BASE_URL}project?project_id=${project_id}`;
    const token = await acquireAccessToken();
    try {
        const op: AxiosResponse<SingleProjectDetail> = await axios.get(url, {
            responseType: 'json',
            headers: {
                Authorization: token
            }
        })
        return await op.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            const response = axiosError.response;
            if (response) {
                throw response.data; // Throw the error response data
            } else {
                throw new Error('Network Error'); // Throw a generic error message for network errors
            }
        } else {
            throw error; // Re-throw other types of errors
        }
    }
}

export const updateProjectDetail = async (project_id: string, project_name: string, project_desc: string, model_name: string) => {
    const url = `${process.env.REACT_APP_BASE_URL}project?project_id=${project_id}&project_name=${project_name}&project_description=${project_desc}&model_name=${model_name}`
    const token = await acquireAccessToken();
    try {
        const op = await axios.put(url, null, {
            headers: {
                accept: 'application/json',
                Authorization: token
            },
        })
        return op.data
    } catch (err) {
        if (err instanceof AxiosError) {
            const error = err.response?.data;
            throw error;
        }
    }
}