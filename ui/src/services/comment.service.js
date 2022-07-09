import http from "../http-common";

class CommentDBService {
  getAll() {
    return http.get("/");
  }
  create(data) {
    return http.post("/create", data);
  }
  update(id, data) {
    return http.put(`/update/${id}`, data);
  }
  delete(id) {
    return http.delete(`/delete/${id}`);
  }
}

export default new CommentDBService();
