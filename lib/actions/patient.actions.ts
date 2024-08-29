"use server";

import { ID, InputFile, Query } from "node-appwrite";

import {
  BUCKET_ID,
  DATABASE_ID,
  ENDPOINT,
  PATIENT_COLLECTION_ID,
  PROJECT_ID,
  databases,
  storage,
  users,
} from "../appwrite.config";
import { parseStringify } from "../utils";

// CREATE APPWRITE USER
export const createUser = async (user: CreateUserParams) => {
  try {
    const newuser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );

    return parseStringify(newuser);
  } catch (error: any) {
    if (error?.code === 409) { // Handle existing user case
      const existingUser = await users.list([
        Query.equal("email", [user.email]),
      ]);

      return parseStringify(existingUser.users[0]); // Ensure parseStringify is called
    }
    console.error("An error occurred while creating a new user:", error);
    return null; // Return null or handle the error as needed
  }
};

// GET USER
export const getUser = async (userId: string) => {
  try {
    const user = await users.get(userId);
    return parseStringify(user);
  } catch (error) {
    console.error("An error occurred while retrieving the user details:", error);
    return null; // Return null in case of an error
  }
};

// REGISTER PATIENT
export const registerPatient = async ({
  // Remove identificationDocument from parameters
  ...patient
}: RegisterUserParams) => {
  try {
    console.log("patient data", patient);
    console.log({gender: patient.gender})

    // Create new patient document without handling identificationDocument
    const newPatient = await databases.createDocument(
      DATABASE_ID!,
      PATIENT_COLLECTION_ID!,
      ID.unique(),
      {
        ...patient, // Include patient data
      }
    );

    return parseStringify(newPatient);
  } catch (error) {
    console.error("An error occurred while creating a new patient:", error);
  }
};

// GET PATIENT
export const getPatient = async (userId: string) => {
  try {
    const patients = await databases.listDocuments(
      DATABASE_ID!,
      PATIENT_COLLECTION_ID!,
      [Query.equal("userId", [userId])]
    );
    console.log("User ID used for query:", userId);


    if (!patients.documents || patients.documents.length === 0) {
      throw new Error("No patient found with the given userId.");
    }

    return parseStringify(patients.documents[0]);
  } catch (error) {
    console.error("An error occurred while retrieving the patient details:", error);
    return null; // Return null in case of an error
  }
};
