import {Octokit} from "octokit";

export const OWNER = "facebook";
export const REPO = "react";

export async function getIssue(page:number) {
  const octokit = new Octokit({
    auth: process.env.REST_API_TOKEN_KEY
  })

  const response = await octokit.request(`GET /repos/{owner}/{repo}/issues?state=open&sort=comments&page=${page}`, {
    owner: OWNER,
    repo: REPO,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });

  return response
}