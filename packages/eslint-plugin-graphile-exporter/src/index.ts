// Inspired by babel-plugin-react-hooks

import { ExhaustiveDeps } from "./ExhaustiveDeps";
import { ExportPlanMethod } from "./ExportPlanMethod";

export const configs = {
  recommended: {
    plugins: ["graphile-exporter"],
    rules: {
      "graphile-exporter/exhaustive-deps": [
        "error",
        {
          disableAutofix: false,
          sortExports: true,
        },
      ],
      "graphile-exporter/export-plan-method": [
        "error",
        {
          disableAutofix: false,
        },
      ],
    },
  },
};

export const rules = {
  "exhaustive-deps": ExhaustiveDeps,
  "export-plan-method": ExportPlanMethod,
};