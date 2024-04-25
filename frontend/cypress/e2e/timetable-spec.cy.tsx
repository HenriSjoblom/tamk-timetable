// Timetable addition and removal test
describe("Timetable Addition and removal", () => {
  it("adding and removing a timetable", () => {
    // Visit the login page
    cy.visit("http://localhost:5173/login");

    // Type the username and password
    cy.get("input[name=username]").type("test");
    cy.get("input[name=password]").type("testpassword");

    // Click the "Log in" button
    cy.contains("button", "Log in").click();

    // Wait for the login operation to complete and store the token
    cy.window().then((win) => {
      const user = win.localStorage.getItem("user");
      if (user) {
        const obj = JSON.parse(user);
        win["token"] = obj.token;
      }
    });

    // Type the course code
    cy.get("input[name=courseCode]").type("5G00EV17-3003");

    // Click the "Search" button
    cy.contains("button", "Search").click();

    // Click the "Add to your timetable" button
    cy.contains("button", "Add to your timetable").click();

    // Calendar reset test
    cy.contains("button", "Reset calendar").click({ force: true });
  });
});