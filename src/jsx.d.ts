// jsx.d.ts

declare namespace JSX {
    interface IntrinsicElements {
      // Adicione definições de tipos para elementos JSX aqui
      div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
      // Pode adicionar mais elementos conforme necessário
    }
  }
  