import { useReveal } from '../hooks/useReveal';

/**
 * Drop-in replacement for `<div class="reveal">…</div>`.
 * Usage: <Reveal className="about-visual" as="div"> ... </Reveal>
 */
export default function Reveal({ children, className = '', as: Tag = 'div', ...rest }) {
  const [ref, visible] = useReveal();
  const cls = `reveal${visible ? ' is-visible' : ''}${className ? ' ' + className : ''}`;
  return (
    <Tag ref={ref} className={cls} {...rest}>
      {children}
    </Tag>
  );
}
