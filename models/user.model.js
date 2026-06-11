
const createUserModel = (userData) => {
  return {
    id: Date.now(),
    name: userData.name,
    email: userData.email,
    age: userData.age,
    phone: userData.phone,
    city: userData.city,
    createdAt: new Date().toISOString(),
  };
};

module.exports = {
  createUserModel,
};