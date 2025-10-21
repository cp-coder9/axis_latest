from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()

    # Login Page
    page.goto("http://localhost:3000/")
    page.screenshot(path="jules-scratch/verification/login_page.png")

    # Admin Dashboard
    page.goto("http://localhost:3000/admin/dashboard")
    page.screenshot(path="jules-scratch/verification/admin_dashboard.png")

    # Freelancer Dashboard
    page.goto("http://localhost:3000/freelancer/dashboard")
    page.screenshot(path="jules-scratch/verification/freelancer_dashboard.png")

    # Client Dashboard
    page.goto("http://localhost:3000/client/dashboard")
    page.screenshot(path="jules-scratch/verification/client_dashboard.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)