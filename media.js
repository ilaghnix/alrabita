document.addEventListener("DOMContentLoaded", () => {
  const centerCore = document.querySelector(".center-core");
  const nodes = document.querySelectorAll(".orbit-node");

  if (!centerCore) return;

  function getTargetAngleForNode(node) {
    const centerRect = centerCore.getBoundingClientRect();
    const nodeRect = node.getBoundingClientRect();

    const centerX = centerRect.left + centerRect.width / 2;
    const centerY = centerRect.top + centerRect.height / 2;
    const targetX = nodeRect.left + nodeRect.width / 2;
    const targetY = nodeRect.top + nodeRect.height / 2;

    const dx = targetX - centerX;
    const dy = targetY - centerY;

    return (Math.atan2(dy, dx) * 180) / Math.PI + 90;
  }

  nodes.forEach((node) => {
    node.addEventListener("mouseenter", () => {
      const targetAngle = getTargetAngleForNode(node);
      centerCore.style.transform = `rotate(${targetAngle}deg)`;
      node.classList.add("active");
    });

    node.addEventListener("mouseleave", () => {
      centerCore.style.transform = "rotate(0deg)";
      node.classList.remove("active");
    });
  });
});
