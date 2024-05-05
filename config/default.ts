export default {
  port: 1337,
  dbUri:
    "mongodb+srv://root:rootuser1234password@cluster0.5s4ln6h.mongodb.net/?retryWrites=true&w=majority",
  saltWorkFactor: 10,
  accessTokenTtl: "15m",
  refreshTokenTtl: "1y",
  publicKey: `-----BEGIN PUBLIC KEY-----
  MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgGhAhQVXEQBXSDQo5xk1x51porbJ
  kundBM5mdi4oLLtujDZJMqsQsUemHunFJVyM7E3mBG/4rbUzYt9sNU3qX/oz7D7h
  CNO3hhYp1U9dOP/SDbG+FODBE+9IXB8be4nzvc0/vYzQQvTJTFVkYzSV73i3TUEM
  ne0syqjgI2NEQmMbAgMBAAE=
  -----END PUBLIC KEY-----`,
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
  MIICWwIBAAKBgGhAhQVXEQBXSDQo5xk1x51porbJkundBM5mdi4oLLtujDZJMqsQ
  sUemHunFJVyM7E3mBG/4rbUzYt9sNU3qX/oz7D7hCNO3hhYp1U9dOP/SDbG+FODB
  E+9IXB8be4nzvc0/vYzQQvTJTFVkYzSV73i3TUEMne0syqjgI2NEQmMbAgMBAAEC
  gYAsHnns+57HTSjSYikDAz56AJWK052n+RAqpTQIbpoXrD4MT0fxGzxbPRNCDVu1
  YjIy+VARbuVclOWX9fxNAA4jk2lhQHNAamS+Ob6H5IQ75+90WdKbXVrEXqoHPK+D
  8BXtTuTf/h+fvbmivFrjTGOqbCvQWtiqQyUpnltUpc07yQJBAKoFQpEhWp11s0A+
  EZ3rhJZnwtFTteOE3RlfKGRxJnk7BKAPnZwP5bbzqNYY+RFs3LkOf66zbVKTOw6b
  4yC5+B8CQQCc+OntVt1RSXN56E3mU6vDj0xVAEEVO/ux3BPPsAKCdZcPJE2/vtCW
  0KArQNSBgGCbgeG/5QGmQXbjETJkOCWFAkABK4YYv5UDDmNMZuDyKEPCUTZ7AEt5
  JFntKcV6Y3jzTp+qhlD8WPOovaaEyqk0IH6oW1wvlJaFAfRfFl2KxRzbAkEAgKH1
  yHl7aaZgS9ETLSD5y4q9SZaovsblze2ECpi4pcHI5S6hy/SJKF2UM32v5uOVxzlb
  Do6SmHRjAVZRThE4pQJAeA8YP/1ye4YMCjfq+ysm94+MUIxgzCfSoLfymsfvd1uC
  uU1EgfL+HNycyoZ2a69ra3wf24555wQKxJZInW5tVg==
  -----END RSA PRIVATE KEY-----`,
};
