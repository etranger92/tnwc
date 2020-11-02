import { COURSES_ARTICLES } from "./types";
export interface GetCourseDetail {
  type: typeof COURSES_ARTICLES.GET_ARTICLES_DETAILS;
  indice: string;
}
