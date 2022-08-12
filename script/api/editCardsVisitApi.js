import instance from "./instance.js";

const editCardCardiologist = async (id, body) => {
  try {
    const newDateCardiologist = await instance.put(`${id}`, body);
    return newDateCardiologist;
  } catch (err) {
    console.log(err);
  }
};

const editCardDentist = async (id, body) => {
  try {
    const newDateDentist = await instance.put(`${id}`, body);
    return newDateDentist;
  } catch (err) {
    console.log(err);
  }
};

const editCardTherapist = async (id, body) => {
  try {
    const newDateTherapist = await instance.put(`${id}`, body);
    return newDateTherapist;
  } catch (err) {
    console.log(err);
  }
};

export { editCardCardiologist, editCardDentist, editCardTherapist };
