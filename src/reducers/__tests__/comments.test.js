import commentsReducer from "reducers/comments";
import saveComment from "actions/index";
import { SAVE_COMMENT } from "actions/types";

it("handles actions of tpe SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "New Comment"
  };

  const newState = commentsReducer([], action);
  expect(newState).toEqual(["New Comment"]);
});

it("handles action with unknown type", () => {
  const newState = commentsReducer([], {});
  expect(newState).toEqual([]);
});
