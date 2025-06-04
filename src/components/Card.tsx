interface CardProps extends React.HtmlHTMLAttributes<HTMLElement> {}

function Card({ children, className }: CardProps) {
  return (
    <section
      className={`shadow-xl rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-800 ${className}`}
    >
      {children}
    </section>
  );
}

export default Card;
