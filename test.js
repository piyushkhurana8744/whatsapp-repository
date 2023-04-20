const send = {
  object: "whatsapp_business_account",
  entry: [
    {
      id: "113103901719285",
      changes: [
        {
          value: {
            messaging_product: "whatsapp",
            metadata: {
              display_phone_number: "919319936852",
              phone_number_id: "105910745780297",
            },
            contacts: [
              {
                profile: { name: "piyushkhurana123 pk123" },
                wa_id: "918744045668",
              },
            ],
            messages: [
              {
                from: "918744045668",
                id: "wamid.HBgMOTE4NzQ0MDQ1NjY4FQIAEhgSQ0RGRkY5NDNENEJFMjUzMTdBAA==",
                timestamp: "1681991486",
                text: { body: "hi" },
                type: "text",
              },
            ],
          },
          field: "messages",
        },
      ],
    },
  ],
};

const get={
  id:send.entry[0].changes[0].value.messages[0].id,
  displayphonenumber:send.entry[0].changes[0].value.metadata.display_phone_number,
  phonenoid:send.entry[0].changes[0].value.metadata.phone_number_id,
  name:send.entry[0].changes[0].value.contacts[0].profile.name,
  wa_id:send.entry[0].changes[0].value.contacts[0].profile.wa_id,
  from:send.entry[0].changes[0].value.messages[0].from,
  text:send.entry[0].changes[0].value.messages[0].text.body
}

console.log(get)