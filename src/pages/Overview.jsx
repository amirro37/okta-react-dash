import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";

const events = [
  { time: "2m ago", type: "user.session.start", outcome: "SUCCESS", actor: "adam@mirroiam.com" },
  { time: "9m ago", type: "policy.evaluate_sign_on", outcome: "SUCCESS", actor: "svc-provisioning" },
  { time: "21m ago", type: "user.mfa.factor.verify", outcome: "FAILURE", actor: "jane.doe@corp.com" },
  { time: "55m ago", type: "group.user_membership.add", outcome: "SUCCESS", actor: "okta-admin" },
];

function Stat({ label, value, sub }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="body2" sx={{ opacity: 0.7 }}>
          {label}
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 800, mt: 0.5 }}>
          {value}
        </Typography>
        {sub ? (
          <Typography variant="caption" sx={{ opacity: 0.7 }}>
            {sub}
          </Typography>
        ) : null}
      </CardContent>
    </Card>
  );
}

export default function Overview() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Stat label="Active Users" value="12,482" sub="Last sync: 3m" />
        </Grid>
        <Grid item xs={12} md={3}>
          <Stat label="MFA Coverage" value="94%" sub="FastPass: 61%" />
        </Grid>
        <Grid item xs={12} md={3}>
          <Stat label="Auth Failures (24h)" value="151" sub="Top: bad_password" />
        </Grid>
        <Grid item xs={12} md={3}>
          <Stat label="Admin Changes (24h)" value="7" sub="Role grants + group adds" />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 1 }}>
                Recent Events
              </Typography>

              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Time</TableCell>
                    <TableCell>Event</TableCell>
                    <TableCell>Outcome</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {events.map((e, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{e.time}</TableCell>
                      <TableCell>
                        <Typography variant="body2" sx={{ fontFamily: "monospace" }}>
                          {e.type}
                        </Typography>
                        <Typography variant="caption" sx={{ opacity: 0.7 }}>

