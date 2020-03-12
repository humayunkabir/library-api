require('dotenv').config()
require('dotenv').config({ path: `.env.${process.env.ENV}` })

export const jwtConstants = {
  secret: process.env.JWT_CONSTANTS_SECRET,
}

export const facebook = {
  app: {
    id: process.env.FACEBOOK_APP_ID,
    secret: process.env.FACEBOOK_APP_SECRET,
  },
}

export default { jwtConstants, facebook }
