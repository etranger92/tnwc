/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { COURSES_ARTICLES } from "./Types/types";
import { GetCourseDetail } from "./Types/interfaceTS";
//Define what type of actions you would like to do with the possibility of taking arguments.
//You don't need to link to your reducer it will be done automatically.
export const getArticleCourseDetail = (indice: string): GetCourseDetail => {
  return {
    type: COURSES_ARTICLES.GET_ARTICLES_DETAILS,
    indice: indice,
  };
};
