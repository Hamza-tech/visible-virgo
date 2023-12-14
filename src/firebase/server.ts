import type { ServiceAccount } from "firebase-admin";
import { initializeApp, cert, getApps } from "firebase-admin/app";

const activeApps = getApps();
const serviceAccount = {
  type: "service_account",
  project_id: 'astro-chat-app-cfa5d',
  private_key_id: '67fb1321921e33b759de77a86c89bec127b99cb5',
  private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCxx876C+zQJ6Xf\nHjI87gzVJMNerSAI4eQGob7/VB8naqnV6LgfCXlLH4TMCkeGq/0/V/LXAh1jKZef\n9F9LN5iRaDF7+diNNMcHGLbcorD2UOXRaXuexsgFn27B0OYFqpm/Ovmc6T/6Ff+d\n1ycyZqpjTS70MJT/NS7WnGxUb6/K+WxuxkjyKhnJMApSNqBC1FXTY0vRBQdXN3xQ\nbffXcL2C7HmU+kABXlqVsqe8piP33+VRwesI3OuplH92Z6Bk3Xe2UPuHsAgaSYtX\nrI8N6rymVS3GbTVE9dEYshR2Loli7M05UznbnvVXAnf1ijrfHgr85jT9VkQCNToS\nSnJSrXtxAgMBAAECggEAD6N49Iv5//GM6MyaNLvoCxPZz8lA6ScdzOuLhqBawTfj\nyrpW//vwXIhgQSaiVhlpBJpy9TDtbtyoxtxTSaWRWTEmMTawMvOyklA9PbleAbzq\nCnrR8gygacY1kv0STutL7QN+E6x9AT3QJ41WmFtpn6SZfceMQ8rk3OITsXXFrAAR\nB3MW8afn0xL6Gr5UYamgxfPKPG0Hdo/CfoxB1DBcDNjwNgvmllf/jF49iccBv6Bl\nNYF3vXibcetBZ3TCiB8NyuKT2T7xFpgQ0LIADR2ZYZyvRGaB2oZUYAooQYIeaig2\niuf+xTJuKTAm36WVPWA+TR1h4fRYFCR+dPFQggYLxQKBgQD0BuwlqHADaAP5YwnC\nrpGmVIb8CXy+JceLNcykEF/O7fhcTIm0/ZY5R3xRhu2ivqOiVPAvGrHVVP0p5tGQ\nFMN/oyt6F2iweslEwi0xm4vqqCtdIhGR6pinGNb1N9sb9czlfg1LngANKl4DRCFl\nNrX5OZZ0XI+IdB+wn0LwHmzf2wKBgQC6gM2NsiHA/OmVJJ7k82wCEJNjh8xSF6wF\nQCoJSgLBgCwQLxQx7Pm8fORpezEWfPKwOwB7i2ToTXSBclwdVD/lP9jIt8gPZTB1\nzE12zCFXKB+9f9Jpn7fBrHAilritIvBcHTVtDi+y3B7hUZsQDazHltS0Le69qjZI\nJz0WJkjJowKBgCJ50+UiHektSdpy9o8NsMAqEwQKpxgKKF3vlODc+1w13K/VlGMA\nrLec9OBjyrECdAXcMC7He7ZjEn1YAeV0OYaP2/Wc1wqP3l2bfV0T17moVrAKvya5\nWSXKaZwtbwRNPsxxeZlkUieKA8w8VOeCykTSsQHxjcm+djey2HcqJUGfAoGAFg4B\nQM5d23qNDMwF1kFK9nuLUmvOp66Q8xYBYpPT+5nym/9VPgouBjImuKqOxYAFGv3/\nMpzrU+VE78HcTsOVwsBoHGRPTjLDJksAphnBn5LpHfmtojv2+PoxUIXOVPsavWne\n1YSl81rAdBi4Y4+abQfTI3ODFf646JNrT+E7Hk0CgYEA6Gdc92prlPDO70oOOeLQ\nZO45T6f2KKxb4nkLV0Fx/aL1+DZwZ7BLdjJkRksqOfwLK58H/wk7mW7ahgP+yN8r\ndL8ZmdJ39l5in/O95gJZJv5pXsO8zEZGadbxG+mEX/38wAnbGd4ZrEAS57Wj/RQX\n7ZvAkQHmD5RyHGn/IhdqbyI=\n-----END PRIVATE KEY-----\n',
  client_email: "firebase-adminsdk-iaj1w@astro-chat-app-cfa5d.iam.gserviceaccount.com",
  client_id: "107941882333898714993",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-iaj1w%40astro-chat-app-cfa5d.iam.gserviceaccount.com",
  universe_domain: "googleapis.com"
};

export const app = activeApps.length === 0 ? initializeApp({
  credential: cert(serviceAccount as ServiceAccount),
}) : activeApps[0];