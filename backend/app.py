from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/process", methods=["POST"])
def process():
    name = request.form.get("username")
    return jsonify({"message": f"Hello {name}, Flask received your data!"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
