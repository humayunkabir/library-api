require('dotenv').config()
require('dotenv').config({ path: `.env.${process.env.DEVELOPMENT}` })

export const facebook = {
  id: process.env.FACEBOOK_APP_ID,
  secret: process.env.FACEBOOK_APP_SECRET,
}
