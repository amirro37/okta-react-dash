import {
  Box,
  Card,
  CardContent,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
} from "@mui/material";

const users = [
  { login: "adam@mirroiam.com", status: "ACTIVE", type: "Employee" },
  { login: "jane.doe@corp.com", status: "ACTIVE", type: "Employee" },
  { login: "svc-provisioning", status: "ACTIVE", type: "Service" },
  { login: "contractor1@ext.com", status: "SUSPENDED", type: "Contractor" },
];

export default function Users() {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>
        Users
      </Typography>

      <Card>
        <CardContent>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Login</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((u, i) => (
                <TableRow key={i}>
                  <TableCell sx={{ fontFamily: "monospace" }}>
                    {u.login}
                  </TableCell>
                  <TableCell>{u.type}</TableCell>
                  <TableCell>
                    <Chip
                      size="small"
                      label={u.status}
                      color={u.status === "ACTIVE" ? "success" : "warning"}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Box>
  );
}

