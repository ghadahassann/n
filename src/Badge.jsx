export default function Badge({ children }) {
  return (
    <span role="status" className="badge">
      {children}
    </span>
  );
}
