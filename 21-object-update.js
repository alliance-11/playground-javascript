let post = {
  title: "Senior TS Dev soon",
  comments: [1,2,3]
}

// Update from API
let postUpdated = { title: "Senior TS Dev UPDATE" }

// comments were deleted after update, because API had no comments
console.log(postUpdated)

// merge allows update just of the fields coming in
let postUpdatedMerge = { ...post, ...postUpdated }
console.log(postUpdatedMerge)




