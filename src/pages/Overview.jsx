import { Box, Grid, Paper, Typography } from "@mui/material";

const kpis = [
  { label: "Active Users", value: "—" },
  { label: "Suspended", value: "—" },
  { label: "MFA Enrolled", value: "—" },
  { label: "Sign-in Failures (24h)", value: "—" },
];

export default function Overview() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>
        Overview
      </Typography>

      <Grid container spacing={2}>
        {kpis.map((k) => (
          <Grid item xs={12} sm={6} md={3} key={k.label}>
            <Paper sx={{ p: 2, borderRadius: 3 }}>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                {k.label}
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 800, mt: 1 }}>
                {k.value}
              </Typography>
            </Paper>
          </Grid>
        ))}

        <Grid item xs={12} md={7}>
          <Paper sx={{ p: 2, borderRadius: 3, height: 320 }}>
            <Typography sx={{ fontWeight: 700, mb: 1 }}>
              Auth Failures Trend (mock)
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              Next: wire to Okta System Log and graph failures by hour/day.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={5}>
          <Paper sx={{ p: 2, borderRadius: 3, height: 320 }}>
            <Typography sx={{ fontWeight: 700, mb: 1 }}>
              Recent Admin Activity (mock)
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.7 }}>
              Next: role grants, group membership changes, policy edits.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
