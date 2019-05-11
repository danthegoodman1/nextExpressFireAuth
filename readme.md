# Nextjs Express next-router example

run `npm run dev` to test, go to `/at` to play around

This has examples of:
- Get inital props from URL query and param
- Using multiple routing options for multiple params (the list of paths)
- Uses (extreme) url replacement if one of the url queries is satisfied: `replace=true`

urls to try:

`http://localhost:3000/at/hehe/ho?par=hey&replace=nobitch`
`http://localhost:3000/at/hehe?par=hey&replace=nobitch`
`http://localhost:3000/at/hehe/ho?par=hey&replace=true`
`http://localhost:3000/at/hehe?par=hey&replace=true`