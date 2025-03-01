# Frontend Challenge

## Objetive
Create an application in Next JS that uses the JSONPlaceholder API to list comments and add new comments.

## Stack
- Next.js
- React Query
- Axios
- Zustand
- Styled Component
- Radix/ui: Icons-> link: https://www.radix-ui.com/icons

## Demo

https://github.com/user-attachments/assets/e41603dc-1c0b-40b2-97e7-d00e2a9bdc2c

## Main Features
- **Show Comments on Cards**: Display user comments in a visually appealing card layout.
- **Create New Comments**: Allow users to add new comments through a simple form.
- **Pagination**: Implement pagination to manage and navigate through large sets of comments efficiently.
- **Intuitive Interface and Responsive Design**: Ensure a user-friendly interface that adapts seamlessly to different devices and screen sizes.
- **Form Validation**: Validate user inputs in the comment form to ensure data integrity.
- **State Management with Zustand**: Utilize Zustand for efficient state management across the application.

## Prerequisites

Make sure you have the following installed:
- Node.js (recommended version: 14.x or higher)
- Npm (package manager)

## Run locally

Clone the project

```bash
  git clone https://github.com/Vctorqui/frontend_challenge.git
```

Go to the project directory

```bash
  cd frontend_challenge
```

Install dependencies

```bash
npm install
# or
pnpm install
# or
yarn 
```

Start the server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Structure of the project

```bash

├── /app
│    ├── ContextProviders.tsx                    
│    ├── layout.tsx
│    ├── page.tsx
│    └── globals.css
├── /components                    
│    ├── /styled            
│    │    ├── StyledComponent.tsx
│    │    ├── StyledComponentRegister.tsx
│    ├── CommentForm.tsx
│    ├── CommentList.tsx
│    ├── Pagination.tsx               
├── /services
│    ├── api.ts
├── /store
│    ├── commentStore.ts
├── /types
│    ├── comment.ts                     
```
## Scope of Challenges Completed

- **Integration of the Comments API**: Implemented API calls to fetch and add comments: 
API: https://jsonplaceholder.typicode.com/comments
- State Management with Zustand: Create a Zustand store to manage the state of comments: fetchComments | addNewComment
- **Adding Comments**:
  - Sent a POST request to the API to create a new comment when the add comment button is clicked.
  - Dynamically updated the comments list to reflect the new comment after it is added.
- **Theming with Styled-Components**: Configured and applied a global theme for the application. 

## Reasoning Behind Decisions Made

- **Form Validation**: Added validation to the comments form to ensure data integrity and improve the user experience.
- **Pagination**: Implemented pagination in CommentList to handle large data sets efficiently and improve usability.
- **Integrated Notistack Library**: Implemented the Notistack library to get better user experience at the momment the user create a new comment.
- **StyledComponetsRegistry file**:  This component ensures that styled-component styles are handled correctly on both the server and client.
- **ContextProvider File**: This component configures and provides the styled-components theme, style registration for SSR (Server-Side Rendering) and API query management with react-query, all from one place, making your application more organized and easier to maintain. 

## Usage / Examples

### Notistack: Snackbar

- **maxSnack:** Defines the maximum number of notifications that can be displayed simultaneously. In this case, it is configured to show up to 3 notifications at the same time.
- **anchorOrigin:** Determines the position on the screen where the notifications will appear. Here it is configured to appear in the upper right corner (top, right).
- **action:** Provides a custom action for each notification. In this example, it adds an icon button (IconButton) with a cross icon (Cross1Icon) to close the notification.

```typescript
export function ContextProviders({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          action={(snackbarId) => (
            <IconButton onClick={() => closeSnackbar(snackbarId)}>
              <Cross1Icon />
            </IconButton>
          )}
        >
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
}
```

## Authors
- **Víctor Quiñones**
---

