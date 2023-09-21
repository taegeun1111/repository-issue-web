import {Octokit} from "octokit";
import {OWNER, REPO, API_VERSION} from "../constants/constants";

const octokit = new Octokit({
  auth: process.env.REST_API_TOKEN_KEY,
})

export async function getIssue(page: number) {
  const response = await octokit.request(`GET /repos/{owner}/{repo}/issues?state=open&sort=comments&per_page=10&page=${page}`, {
    owner: OWNER,
    repo: REPO,
    headers: {
      'X-GitHub-Api-Version': API_VERSION
    }
  });
  return response;
}

export async function getDetail(issueNumber: number) {
  const response = await octokit.request(`GET /repos/{owner}/{repo}/issues/${issueNumber}`, {
    owner: OWNER,
    repo: REPO,
    headers: {
      'X-GitHub-Api-Version': API_VERSION
    }
  });
  return response;
}