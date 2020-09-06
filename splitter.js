module.exports = (resource, logicalId) => {
  let destination;
  switch (true) {
    case logicalId.endsWith("Role"):
      destination = "Role";
      break;
    case logicalId.endsWith("LambdaFunction"):
      destination = "Function";
      break;
    case logicalId.endsWith("LogGroup"):
      destination = "Log";
      break;
    case logicalId.includes("LambdaVersion"):
      destination = "Version";
      break;
    default:
      destination = "Infrastructure";
      break;
  }
  return { destination };
};
