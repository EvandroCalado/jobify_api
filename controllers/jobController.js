import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/customErrors.js";
import Job from "../models/jobModel.js";

export const getAllJobs = async (req, res) => {
  const jobs = await Job.find();

  res.status(StatusCodes.OK).json({ jobs });
};

export const getOneJob = async (req, res) => {
  const job = await Job.findById(req.params.id);

  res.status(StatusCodes.OK).json({ job });
};

export const createJob = async (req, res) => {
  const { company, position } = req.body;

  if (!company || !position)
    throw new BadRequestError("please provide company and position");

  const job = await Job.create({ company, position });

  res.status(StatusCodes.OK).json({ job });
};

export const updateJob = async (req, res) => {
  const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(StatusCodes.OK).json({ msg: "job updated", job: updatedJob });
};

export const deleteJob = async (req, res) => {
  const deletedJob = await Job.findByIdAndDelete(req.params.id);

  res.status(StatusCodes.OK).json({ msg: "job deleted", job: deletedJob });
};
