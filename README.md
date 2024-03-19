This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

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

Take a look at the `package.json`

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## About the component

This is a table component created to fulfill the need for a table with specific subheaders for each object. It was built using the shadcn/ui library as the main framework, composed of the following components:

- [Shadcn/ui-Butonn](https://ui.shadcn.com/docs/components/button) - Learn how to implement the button component.
- [Shadcn/ui-Calendar](https://ui.shadcn.com/docs/components/calendar) - Learn how to implement the calendar component.
- [Shadcn/ui-Checkbox](https://ui.shadcn.com/docs/components/checkbox) - Learn how to implement the checkbox component.
- [Shadcn/ui-DropdownMenu](https://ui.shadcn.com/docs/components/dropdown-menu) - Learn how to implement the dropdownMenu component.
- [Shadcn/ui-Input](https://ui.shadcn.com/docs/components/input) - Learn how to implement the input component.
- [Shadcn/ui-Popover](https://ui.shadcn.com/docs/components/popover) - Learn how to implement the popover component.
- [Shadcn/ui-Table](https://ui.shadcn.com/docs/components/table) - Learn how to implement the table component.
- [Shadcn/ui-DataPickerRange](https://ui.shadcn.com/docs/components/date-picker) - Learn how to implement the date picker range component.
- [Shadcn/ui-ThemeProvider](https://ui.shadcn.com/themes) - Learn how to implement the theme provider component.
- [Shadcn/ui-ThemeToggle](https://ui.shadcn.com/docs/components/toggle) - Learn how to implement the theme toggle component.

## About the data

The data utilized in crafting the component are entirely fictional `src\data\reportData.ts`; designed to meet my specific requirements. Within file `src\data\type.ts` we encounter three distinct types of data structures:

-DailyMetrics: This type encompasses various metrics seuch as 'act', 'bp' and var.

-DailyItem: Each 'DailyItem' consists of a 'name' attribute along with data categorized into daily, monthly, and yearly metrics, each represented by the 'DailyMetrics' type.

-DailyData: Finally, the 'DailyData' type organizes arrays of 'DailyItem' instances under different categories such as 'drying', 'processing', and 'mine'.
