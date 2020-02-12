import { combineReducers } from "redux";



// const roomVariables = (state = {}, action) => {
//   switch (action.type) {
//     case "LOAD_DATA":
//       return action.payload.roomVariables;
//     case "GUARD_ROOM_SUCCESS":
//       let guardSuccess = Object.assign({}, state, {
//         GuardRoom: {
//           theftSuccess: true
//         }
//       });
//       return guardSuccess;
//     case "GUARD_ROOM_FAILURE":
//       let guardFailure = Object.assign({}, state, {
//         GuardRoom: {
//           theftSuccess: false
//         }
//       });
//       return guardFailure;
//     case "PANTRY_ROOM_TOOK_CHEESE":
//       let pantryRoomTookCheese = Object.assign({}, state, {
//         PantryRoom: { tookCheese: true }
//       });
//       return pantryRoomTookCheese;
//     case "THIRD_ROOM_ENEMY_BATTLE":
//       let thirdRoomEnemyBattle = Object.assign({}, state, {
//         ThirdRoom: {
//           enemy: false
//         }
//       });
//       return thirdRoomEnemyBattle;
//     case "FOURTH_ROOM_ENEMY_BATTLE":
//       let fourthRoomEnemyBattle = Object.assign({}, state, {
//         FourthRoom: {
//           enemy: false
//         }
//       });
//       return fourthRoomEnemyBattle;
//     case "FIRST_ROOM_MADE_DOG_FRIEND":
//       let lastRoomDogVariable = Object.assign({}, state, {
//         FirstRoom: { specialEvent: false, dogFriend: true },
//         LastRoom: { friendlyMutt: true, enemy: true }
//       });
//       return lastRoomDogVariable;
//     case "FIRST_ROOM_MADE_DOG_ENEMY":
//       let firstRoomDogVariable = Object.assign({}, state, {
//         FirstRoom: { specialEvent: false, dogFriend: false }
//       });
//       return firstRoomDogVariable;
//     case "FINAL_ROOM_ENEMY_BATTLE":
//       let finalRoomBattle = Object.assign({}, state, {
//         LastRoom: { enemy: false, dogFriend: true }
//       });
//       return finalRoomBattle;
//     default:
//       return state;
//   }
// };




const TutorialStart = (state = {}, action) => {
  switch (action.type) {
    case "VISIT_TutorialStart":
      let TutorialStart = Object.assign({}, state, {
        visited: true
      });
      return TutorialStart;
    default:
      return state;
  }
}

const FirstRoom = (state = {}, action) => {
  switch (action.type) {
    case "VISIT_FirstRoom":
      let newState = Object.assign({}, state, {
        visited: true
      });
      return newState;
    default:
      return state;
  }
}

const SecondRoom = (state = {}, action) => {
  switch (action.type) {
    case "VISIT_SecondRoom":
      let newState = Object.assign({}, state, {
        visited: true
      });
      return newState;
    default:
      return state;
  }
}




const roomVariables = combineReducers({
  TutorialStart,
  FirstRoom,
  SecondRoom

})

export default roomVariables;