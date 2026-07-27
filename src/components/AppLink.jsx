export function navigate(path) {
  if (window.location.pathname === path) return;
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

export default function AppLink({ to, className = "", activeClassName = "", currentPath, children, onClick, ...props }) {
  const active = currentPath === to || (to !== "/" && currentPath?.startsWith(`${to}/`));
  const classes = `${className}${active && activeClassName ? ` ${activeClassName}` : ""}`.trim();

  return (
    <a
      href={to}
      className={classes}
      onClick={(event) => {
        event.preventDefault();
        onClick?.(event);
        navigate(to);
      }}
      {...props}
    >
      {children}
    </a>
  );
}