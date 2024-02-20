import { StatusCodes } from "http-status-codes";
import Job from "../models/jobModel.js";

export const getAllJobs = async (req, res) => {
  const jobs = await Job.find();

  res.status(StatusCodes.OK).json({ jobs });
};

export const getOneJob = async (req, res) => {
  const { id } = req.params;

  const job = await Job.findById(id);

  if (!job) {
    return res.status(404).json({ msg: `No job with id ${id}` });
  }

  res.status(StatusCodes.CREATED).json({ job });
};

export const createJob = async (req, res) => {
  const { company, position } = req.body;

  if (!company || !position) {
    return res.status(400).json({ msg: "Please provide company and position" });
  }

  const job = await Job.create({ company, position });

  res.status(StatusCodes.OK).json({ job });
};

export const updateJob = async (req, res) => {
  const { id } = req.params;

  const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!updatedJob) {
    return res.status(404).json({ msg: `No job with id ${id}` });
  }

  res.status(StatusCodes.OK).json({ msg: "Job updated", job: updatedJob });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;

  const deletedJob = await Job.findByIdAndDelete(id);

  if (!deletedJob) {
    return res.status(404).json({ msg: `No job with id ${id}` });
  }

  res.status(StatusCodes.OK).json({ msg: "Job deleted", job: deletedJob });
};
