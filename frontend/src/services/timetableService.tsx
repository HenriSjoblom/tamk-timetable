import axios from "axios";
import { ClassResponse, CourseResponse } from "../types";
import { toast } from "react-toastify";
const baseUrl = "/api/timetables";
const getToken = () => {
  return window["token"] || JSON.parse(localStorage.getItem("user") || "{}").token;
};

export const getTimetableByCourse = async (id: string) => {
  try {
    const token = getToken();
    const res = await axios.get<CourseResponse>(`${baseUrl}/course/`, {
      params: { code: id },
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.data;
  } catch (error) {
    console.log("An error occured:", error);
    toast.error("Sorry, something went wrong. Make sure the code is correct.");
  }
};

export const getTimetableByClass = async (id: string) => {
  try {
    const token = getToken();
    const res = await axios.get<ClassResponse>(`${baseUrl}/class/`, {
      params: { code: id },
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.data;
  } catch (error) {
    console.log("An error occured:", error);
    toast.error("Sorry, something went wrong. Make sure the code is correct.");
  }
};

export const getUsersTimetable = async () => {
  try {
    const token = getToken();
    const res = await axios.get(`${baseUrl}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.data;
  } catch (error) {
    console.log("An error occured:", error);
  }
};

export const uploadTimetable = async (codes: string[]) => {
  try {
    const token = getToken();
    const res = await axios.post(
      `${baseUrl}`,
      { codes },
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );
    return res.data;
  } catch (error) {
    console.log("An error occured:", error);
    toast.error("Sorry, something went wrong. Make sure the code is correct.");
  }
};
