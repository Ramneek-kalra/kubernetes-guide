# Services and Networking

Kubernetes services allow you to expose your pods to the network. There are different types of services:
- **ClusterIP**: Exposes the service on a cluster-internal IP.
- **NodePort**: Exposes the service on each node's IP at a static port.
- **LoadBalancer**: Provisions an external load balancer.

## Example: Create a Service
```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  selector:
    app: my-app
  ports:
    - protocol: TCP
      port: 80
      targetPort: 9376
  type: ClusterIP
```

Apply the service configuration:
```bash
kubectl apply -f my-service.yaml
```

---

📝 **Next Step:** [Persistent Storage](03-persistent-storage.md)
