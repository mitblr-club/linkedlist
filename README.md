# mitblr.club 'linkedlist'

![Release](https://img.shields.io/github/v/release/mitblr-club/linkedlist)
![Forks](https://img.shields.io/github/forks/mitblr-club/linkedlist?style=flat)

This template is a fully responsive website built with [Next.JS](https://nextjs.org), [TailwindCSS](https://tailwindcss.com), and [shadcn/ui](https://ui.shadcn.com).

## Configuration

1.  All core config. values of the template exist in the root at [`site.config.ts`](/site.config.ts).

    ```ts
    export const siteConfig = {
      name: '...',
      institution: '...',
      description: '...',
    };
    ```

2.  The list of links is located at [`app/data.tsx`](/app/data.tsx), with icons from [`lucide-react`](https://lucide.dev/icons/) that you can choose as per your requirements.

## Development

1. To install packages, run:

   ```bash
   npm install
   ```

   You can then make changes as necessary in order to be committed.

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Format changes using Prettier.

   ```bash
   # Formatting
   npm run format:write
   ```

Now, you can create a pull request to commit changes to the repository.
