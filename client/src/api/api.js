import axios from "axios";


export async function analyseResume(resumeText, role) {
    const response = await axios.post('https://resume-reviewer-api-2oua.onrender.com/api/review', {
        resumeText, role
    })
    return response.data;
}