// let inputname = document.querySelector(".inputname");
// let inputBorn = document.querySelector(".inputBorn");
// let inputdate = document.querySelector(".inputdate");
// let inputwage = document.querySelector(".inputwage");
// let th1 = document.querySelector(".th1");
// let th2 = document.querySelector(".th2");
// let th3 = document.querySelector(".th3");
// let th4 = document.querySelector(".th4");
// let th5 = document.querySelector(".th5");
// let button = document.querySelector(".button");

// let tbody = document.querySelector(".tbody");

// const data = {
//   userCard: [],
// };

// button.addEventListener("click", (event) => {
//   event.preventDefault();
//   data.userCard.push({
//     checkBoxId: Date.now(),
//     name: inputname.value,
//     born: inputBorn.value,
//     date: inputdate.value,
//     wage: inputwage.value,
//   });
//   console.log(data);



//   tbody.innerHTML = "";
//   data.userCard.forEach((el, i) =>{
// tbody.innerHTML += `
// <tr>
// <td><input class "inputCheckBox" id ="${el.checkBoxId}" type="checkbox"></td>
// <td>${el.name}</td>
// <td>${el.born}</td>
// <td>${el.date}</td>
// <td>${el.wage}</td>
// </tr>
// `
//   })
// });


const addUserCard = (data) => {
  let inputname = document.querySelector(".inputname");
  let inputBorn = document.querySelector(".inputBorn");
  let inputdate = document.querySelector(".inputdate");
  let inputwage = document.querySelector(".inputwage");

  data.userCard.push({
    checkBoxId: Date.now(),
    name: inputname.value,
    born: inputBorn.value,
    date: inputdate.value,
    wage: inputwage.value,
  });
  console.log(data);
};


const drowCard = (data) => {
  let tbody = document.querySelector(".tbody");


  tbody.innerHTML = "";
  data.userCard.forEach((el, i) =>{
tbody.innerHTML += `
<tr>
<td><input class "inputCheckBox" id ="${el.checkBoxId}" type="checkbox"></td>
<td>${el.name}</td>
<td>${el.born}</td>
<td>${el.date}</td>
<td>${el.wage}</td>
</tr>
`})
};







const init = () => {
  // let inputname = document.querySelector(".inputname");
  // let inputBorn = document.querySelector(".inputBorn");
  // let inputdate = document.querySelector(".inputdate");
  // let inputwage = document.querySelector(".inputwage");
  let th1 = document.querySelector(".th1");
  let th2 = document.querySelector(".th2");
  let th3 = document.querySelector(".th3");
  let th4 = document.querySelector(".th4");
  let th5 = document.querySelector(".th5");
  let button = document.querySelector(".button");
  let counter = document.querySelector('.counter');
  // let tbody = document.querySelector(".tbody");

  const data = {
    userCard: [],
  };


  button.addEventListener("click", (event) => {
    event.preventDefault();
    addUserCard (data);
    drowCard (data);
  counter.innerHTML = ` колічество сотруднтіков 
  ${data.userCard.length}
  `;
    // data.userCard.push({
    //   checkBoxId: Date.now(),
    //   name: inputname.value,
    //   born: inputBorn.value,
    //   date: inputdate.value,
    //   wage: inputwage.value,
    // });
    // console.log(data);
  
  
  
  //   tbody.innerHTML = "";
  //   data.userCard.forEach((el, i) =>{
  // tbody.innerHTML += `
  // <tr>
  // <td><input class "inputCheckBox" id ="${el.checkBoxId}" type="checkbox"></td>
  // <td>${el.name}</td>
  // <td>${el.born}</td>
  // <td>${el.date}</td>
  // <td>${el.wage}</td>
  // </tr>
  // `
  //   })
  });



}
init ();











// const commonVariables = (eventTarget, data) => {
//     const listId = eventTarget.closest(".list").id;
//     const card = eventTarget.closest(".card");
//     const cardId = +card.id;
//     const deletedCard = data[listId].filter((card) => card.id === cardId)[0];
//     const deletedCardIndex = data[listId].findIndex(
//       (card) => card.id === deletedCard.id
//     );

//     return { listId, deletedCard, deletedCardIndex };
//   };

//   const drawList = (data, listType) => {
//     const list = document.querySelector(`#${listType}`);

//     list.innerHTML = "";
//     data[listType].forEach((card) => {
//       list.innerHTML += `
//         <li class='card' id=${card.id}>
//           <span>Title:</span>
//           <p class='title'>${card.title}</p>
//           <span>Description:</span>
//           <p class='description'>${card.description}</p>
//           <br />
//           ${
//             listType !== "deleted"
//               ? `<button class='button editButton'>Edit</button>
//                 <button class='button nextButton'>Next</button>
//                 <button class='button deleteButton'>Delete</button>`
//               : `<button class='button restoreButton'>Restore</button>`
//           }
//         </li>
//       `;
//     });
//   };

//   const createCard = (data) => {
//     const createItemForm = document.querySelector(".createItemForm");
//     const inputTitle = document.querySelector("#inputTitle");
//     const inputDescription = document.querySelector("#inputDescription");

//     data.toDo.push({
//       title: inputTitle.value,
//       description: inputDescription.value,
//       id: Date.now(),
//     });

//     createItemForm.reset();
//     drawList(data, "toDo");
//   };

//   const deleteCard = (eventTarget, data) => {
//     const { listId, deletedCard, deletedCardIndex } = commonVariables(
//       eventTarget,
//       data
//     );

//     data[listId].splice(deletedCardIndex, 1);
//     data.deleted.push(deletedCard);

//     drawList(data, listId);
//     drawList(data, "deleted");
//   };

//   const editCard = (eventTarget, data) => {
//     const { listId, deletedCard, deletedCardIndex } = commonVariables(
//       eventTarget,
//       data
//     );
//     const modal = document.querySelector(".modal");
//     const inputModalTitle = document.querySelector(".inputModalTitle");
//     const inputModalDescription = document.querySelector(
//       ".inputModalDescription"
//     );
//     const editModalButton = document.querySelector("#editModalButton");
//     const cancelModalButton = document.querySelector("#cancelModalButton");

//     modal.style.display = "block";
//     inputModalTitle.value = deletedCard.title;
//     inputModalDescription.value = deletedCard.description;

//     const editListenerHandler = (event) => {
//       event.preventDefault();
//       data[listId].splice(deletedCardIndex, 1, {
//         title: inputModalTitle.value,
//         description: inputModalDescription.value,
//         id: deletedCard.id,
//       });

//       closeModal();
//     };

//     const closeModal = () => {
//       editModalButton.removeEventListener("click", editListenerHandler);

//       modal.style.display = "none";
//       drawList(data, listId);
//     };

//     editModalButton.addEventListener("click", editListenerHandler);

//     cancelModalButton.addEventListener("click", (event) => {
//       event.preventDefault();
//       closeModal();
//     });
//   };

//   const tranferCardToAnotherList = (eventTarget, data) => {
//     const listId = commonVariables(eventTarget, data).listId;
//     const deletedCard = commonVariables(eventTarget, data).deletedCard;
//     const deletedCardIndex = commonVariables(eventTarget, data).deletedCardIndex;

//     const listsId = [...document.querySelectorAll(".list")].map(
//       (list) => list.id
//     );
//     const nextListIndex = listsId.findIndex((id) => id === listId) + 1;

//     data[listId].splice(deletedCardIndex, 1);
//     data[listsId[nextListIndex]].push(deletedCard);

//     drawList(data, listId);
//     drawList(data, listsId[nextListIndex]);
//   };

//   const restoreCard = (eventTarget, data) => {
//     const { deletedCard, deletedCardIndex } = commonVariables(eventTarget, data);

//     data.deleted.splice(deletedCardIndex, 1);
//     data.toDo.push(deletedCard);

//     drawList(data, "deleted");
//     drawList(data, "toDo");
//   };

//   const deleteAllFromDeletedList = (data) => {
//     data.deleted = [];
//     drawList(data, "deleted");
//   };

//   const init = () => {
//     const createCardButton = document.querySelector("#createCardButton");
//     const toDoList = document.querySelector(".toDoList");
//     const data = {
//       toDo: [],
//       inProgress: [],
//       done: [],
//       deleted: [],
//     };

//     createCardButton.addEventListener("click", (event) => {
//       event.preventDefault();
//       createCard(data);
//     });

//     toDoList.addEventListener("click", (event) => {
//       switch (true) {
//         case [...event.target.classList].includes("deleteButton"):
//           deleteCard(event.target, data);
//           break;
//         case [...event.target.classList].includes("editButton"):
//           editCard(event.target, data);
//           break;
//         case [...event.target.classList].includes("nextButton"):
//           tranferCardToAnotherList(event.target, data);
//           break;
//         case [...event.target.classList].includes("restoreButton"):
//           restoreCard(event.target, data);
//           break;
//         case [...event.target.classList].includes("clearAllButton"):
//           deleteAllFromDeletedList(data);
//           break;
//       }
//     });
//   };

//   init();
