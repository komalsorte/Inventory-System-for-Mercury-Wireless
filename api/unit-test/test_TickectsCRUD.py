__author__ = "Komal Atul Sorte"

import unittest


class TestTicketsCRUD(unittest.TestCase):

    def test_load_response(self):
        application = app.test_client(self)
        response = application.get("/load")
        self.assertEquals(response.status_code, 200)

    def test_load_response_type(self):
        application = app.test_client(self)
        response = application.get('/load')
        self.assertEquals(response.content_type, "application/json")

    def test_read_response(self):
        application = app.test_client(self)
        response = application.get('/read/' + "117")
        print(response.data)

    def test_loadTicketsRecord(self):
        self.assertIsInstance(api.loadTicketsRecord(), dict)

    def test_create(self):
        self.assertAlmostEqual(api.TicketsCRUD().create(115, {
            "type": "low",
            "description": "t",
            "opened_by": "t",
            "opened_at": "t",
            "updated_at": "t",
            "due_date": "t",
            "updated_by": "t"
        }), 115)

    def test_read(self):
        self.assertIsInstance(api.TicketsCRUD().read(115), dict)

    def test_update(self):
        self.assertAlmostEqual(api.TicketsCRUD().update(115, {
            "type": "Low",
            "description": "t",
            "opened_by": "t",
            "opened_at": "t",
            "updated_at": "t",
            "due_date": "t",
            "updated_by": "t"
        }), True)

    def test_update_str(self):
        self.assertAlmostEqual(api.TicketsCRUD().update('115', {
            "type": "Mopderate",
            "description": "t",
            "opened_by": "t",
            "opened_at": "t",
            "updated_at": "t",
            "due_date": "t",
            "updated_by": "t"
        }), True)

    def test_delete(self):
        self.assertAlmostEqual(api.TicketsCRUD().delete(115), True)

    def test_delete_str(self):
        self.assertAlmostEqual(api.TicketsCRUD().delete('115'), True)
