import axios from "axios";


export async function analyseResume(resumeText, role) {
    const response = await axios.post('http://localhost:5000/api/review', {
        resumeText, role
    })
    return response.data;
}