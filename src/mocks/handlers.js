import { rest } from "msw";

const baseURL = "https://django-rest-api-walkalong.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json(
        {
            pk: 2,
            username: "Anna",
            email: "",
            first_name: "",
            last_name: "",
            profile_id: 2,
            profile_image: "https://res.cloudinary.com/dpxocs3ze/image/upload/v1/media/images/1666276974972_cybhhd"
            }
      )
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
