import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class StudentDAO {
    private Connection conn;

    public StudentDAO(Connection conn) {
        this.conn = conn;
    }

    // Method to insert a new student record
    public void insertStudent(int id, String name, String department) throws SQLException {
        String sql = "INSERT INTO students (id, name, department) VALUES (?, ?, ?)";
        try (PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setInt(1, id);
            stmt.setString(2, name);
            stmt.setString(3, department);
            stmt.executeUpdate();
            System.out.println("Student inserted successfully.");
        }
    }

    // Method to update student details
    public void updateStudent(int id, String newName, String newDepartment) throws SQLException {
        String sql = "UPDATE students SET name = ?, department = ? WHERE id = ?";
        try (PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, newName);
            stmt.setString(2, newDepartment);
            stmt.setInt(3, id);
            int rowsAffected = stmt.executeUpdate();
            System.out.println(rowsAffected + " record(s) updated.");
        }
    }
    
}
