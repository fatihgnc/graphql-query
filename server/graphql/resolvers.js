import {
  getUsers,
  getJobs,
  getJobById,
  getUserById,
  getCompanyById,
  getCompanyJobsById,
} from '../utils/queries.js';

export const resolvers = {
  Query: {
    jobs: () => getJobs(),
    users: () => getUsers(),
    job: (_root, { id }) => getJobById(id),
    user: (_root, { id }) => getUserById(id),
    company: (_root, { id }) => getCompanyById(id),
  },
  User: {
    company: (user) => {
      return getCompanyById(user?.companyId);
    },
    job: (user) => {
      return getJobById(user?.jobId);
    },
  },
  Company: {
    availableJobs: (company) => {
      return getCompanyJobsById(company.id);
    },
  },
};