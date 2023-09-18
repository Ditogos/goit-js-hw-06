const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imageGallery = document.querySelector(".gallery");
images.forEach((image) => {
  const listGallery = document.createElement("li");
  const imgList = document.createElement("img");
  imgList.src = image.url;
  imgList.alt = image.alt;
  listGallery.appendChild(imgList);
  imageGallery.appendChild(listGallery);
  listGallery.insertAdjacentHTML("afterbegin", image);
});

const imageStyles = document.querySelector(".gallery");
imageStyles.style.listStyle = "none";
imageStyles.style.display = "flex";
imageStyles.style.flexDirection = "row";
imageStyles.style.justyfyContent = "space-between";
imageStyles.style.gap = "5px";
